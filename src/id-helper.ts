// generateId based on first char from task + linux timestamp
export default (task: string) => task.charAt(0) + Date.now().toString();
