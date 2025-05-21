export default function PomodoroWidgetPage() {
  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Pomodoro Timer</h1>
      <iframe
        src="https://focus-flow-widget.vercel.app/"
        className="w-full h-[500px] rounded-lg shadow"
      ></iframe>
    </div>
  );
}
