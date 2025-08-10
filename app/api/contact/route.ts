export async function POST(req: Request) {
  try {
    const data = await req.json()
    // Basic validation
    if (!data?.name || !data?.email || !data?.message) {
      return new Response(JSON.stringify({ ok: false, error: "Missing fields" }), { status: 400 })
    }
    // Simulate handling (log)
    console.log("Contact form submission:", data)
    // You could integrate email or storage here later
    return new Response(JSON.stringify({ ok: true }), { status: 200 })
  } catch (e: any) {
    return new Response(JSON.stringify({ ok: false, error: e?.message || "Unknown error" }), { status: 500 })
  }
}
