export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
      
{/* Header */}
<header className="bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md px-10 py-6">
  <h1 className="text-3xl font-bold text-white">
    IoTrust
  </h1>
  <p className="text-indigo-100 mt-1">
    Secure IoT Device Onboarding & Trust Management Platform
  </p>
</header>


      {/* Dashboard Cards */}
      <section className="max-w-6xl mx-auto px-10 py-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-10">
          Dashboard
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <a
            href="/onboard"
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <div className="text-blue-600 text-4xl mb-4">🔐</div>
            <h3 className="text-xl font-semibold mb-2">
              Register Device
            </h3>
            <p className="text-gray-600">
              Securely onboard new IoT devices into the system.
            </p>
          </a>

          <a
            href="/authenticate"
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <div className="text-green-600 text-4xl mb-4">✅</div>
            <h3 className="text-xl font-semibold mb-2">
              Authenticate Device
            </h3>
            <p className="text-gray-600">
              Verify device identity and issue secure access tokens.
            </p>
          </a>

          <a
            href="/devices"
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-1 transition"
          >
            <div className="text-purple-600 text-4xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">
              Device Management
            </h3>
            <p className="text-gray-600">
              View, approve and manage registered IoT devices.
            </p>
          </a>

        </div>
      </section>

      <footer className="text-center text-gray-500 text-sm pb-6">
        Secure IoT Device Onboarding Platform · ESP32 · FastAPI · Next.js
      </footer>
    </main>
  );
}
