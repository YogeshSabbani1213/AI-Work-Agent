import { useState } from "react";

function App() {
  // useState<string> tells TypeScript that request must always be a string.
  // This prevents us from accidentally storing a number, object, etc.
  const [request, setRequest] = useState<string>("");

  // This state will contain the response we receive from our backend.
  const [response, setResponse] = useState<string>("");

  // This state tells us whether the API request is currently running.
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!request.trim()) {
      return;
    }

    try {
      setLoading(true);
      setResponse("");

      // fetch() is built into the browser, so we don't need Axios for this.
      const result = await fetch("http://localhost:5000/api/work", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          request
        })
      });

      const data = await result.json();

      setResponse(data.message);
    } catch (error) {
      // "unknown" is the safest type for errors in TypeScript.
      console.error("Request failed:", error);
      setResponse("Something went wrong while contacting the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold">
          AI Work Agent
        </h1>

        <p className="mt-2 text-slate-400">
          Turn unstructured work into an executable workflow.
        </p>

        <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900 p-6">
          <label className="mb-3 block text-sm font-medium">
            What do you need to get done?
          </label>

          <textarea
            value={request}
            onChange={(event) => setRequest(event.target.value)}
            placeholder="Example: Review the partner discussion, draft a thank-you email, and remind me in 7 days."
            className="min-h-40 w-full resize-none rounded-lg border border-slate-700 bg-slate-950 p-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-4 rounded-lg bg-blue-600 px-5 py-3 font-medium hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Processing..." : "Process Request"}
          </button>
        </div>

        {response && (
          <div className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-lg font-semibold">
              Agent Response
            </h2>

            <p className="mt-3 text-slate-300">
              {response}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;