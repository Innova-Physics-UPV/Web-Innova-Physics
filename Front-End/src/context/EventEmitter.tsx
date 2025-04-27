// eventEmitter.ts
class EventEmitter {
  private events: { [event: string]: Function[] } = {};

  // Método para suscribirse a un evento
  on(event: string, listener: (...args: any[]) => void): void {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  // Método para dejar de escuchar un evento
  off(event: string, listener: (...args: any[]) => void): void {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(fn => fn !== listener);
  }

  // Método para emitir un evento
  emit(event: string, ...args: any[]): void {
    if (!this.events[event]) return;
    this.events[event].forEach(listener => listener(...args));
  }
}

const eventEmitter = new EventEmitter();
export default eventEmitter;
