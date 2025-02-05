export async function startGame(e) {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://emojihub.yurace.pro/api/all/category/animals-and-nature",
    );

    // if response is ok store in const data

    if (!response.ok) {
      throw new Error("Fetch error");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }

  setIsGameOn(true);

  return data;
}
