export async function fetchData(endpoint: string) {
  try {
    const url = new URL(endpoint);
    const response = await fetch(url.toString());

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Response("Error fetching data", { status: 500, statusText: (error as Error).message });
  }
}

export interface AuthorField {
  name: string;
  lastName: string;
}

export const authorField: AuthorField = {
  name: "Lila",
  lastName: "Papazian",
};
