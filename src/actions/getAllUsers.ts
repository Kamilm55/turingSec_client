export async function getAllUsers() {
  try {
    const res = await fetch(
      "http://localhost:5001/api/auth/allUsers",
      {
        method: "GET",
      }
    );

    if (!res.ok) {
      throw new Error("Wrong response");
    }
    const data = await res.json();


    
    return data.data;
  } catch (err: any) {
    console.log(err);
    throw new Error(err.message);
  }
}