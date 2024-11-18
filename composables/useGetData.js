export const useGetData = async (url) => {
  const isLoading = ref(false);
  const data = ref([]);

  const getData = async () => {
    if (isLoading.value) return;
    try {
      isLoading.value = true;
      const { data: response, error } = await useFetch(url);
      if (!error.value) {
        data.value = response.value.result;
      } else {
        throw new Error(`發生錯誤: ${error.value}`);
      }
    } catch (error) {
      if (import.meta.client) {
        alert(error.message);
      } else {
        console.error(`Error fetching news: ${error.message}`);
      }
    } finally {
      isLoading.value = false;
    }
  };

  await getData();

  return {
    isLoading,
    data,
  };
};
