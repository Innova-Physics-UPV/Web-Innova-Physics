using System;
using System.Collections.Generic;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using HtmlAgilityPack;
using Microsoft.AspNetCore.Mvc;

namespace NewsScraperAPI.Controllers
{
    [ApiController]
    [Route("api/news")]
    public class NewsController : ControllerBase
    {
        private const string NewsUrl = "https://home.cern/news?topic=1114";
        private const string OutputFile = "news_links.txt";

        [HttpGet("scrape")]
        public async Task<IActionResult> ScrapeNews()
        {
            try
            {
                var links = await GetNewsLinks();
                await System.IO.File.WriteAllLinesAsync(OutputFile, links);

                // Devolver el archivo para su descarga
                var bytes = await System.IO.File.ReadAllBytesAsync(OutputFile);
                return File(bytes, "text/plain", "news_links.txt");
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Error = ex.Message });
            }
        }

        private async Task<List<string>> GetNewsLinks()
        {
            using var httpClient = new HttpClient();
            var html = await httpClient.GetStringAsync(NewsUrl);
            var doc = new HtmlDocument();
            doc.LoadHtml(html);

            var links = new List<string>();
            foreach (var node in doc.DocumentNode.SelectNodes("//a[@href]") ?? new HtmlNodeCollection(null))
            {
                var href = node.GetAttributeValue("href", "");
                if (!string.IsNullOrEmpty(href) && href.StartsWith("/news/"))
                {
                    links.Add("https://home.cern" + href);
                }
            }

            return links;
        }
    }
}
