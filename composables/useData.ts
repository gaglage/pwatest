export const useData = () => {
  async function getChampionships() {
    const { data, error } = await useFetch("/api/getChampionships");

    if (error.value) {
      console.error("Error al obtener usuarios:", error.value);
      return [];
    }

    console.log(
      "🚀 ~ file: useData.ts:12 ~ getChampionships ~ data.value:",
      data.value
    );
    return data.value;
  }
  return { getChampionships };
};
