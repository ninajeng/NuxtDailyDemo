export const useFetch = (url) => {
  const isLoading = ref(false);
  const data = ref([]);

  const getData = async () => {
    isLoading.value = true;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const { result } = await response.json();
        data.value = result;
      } else {
        throw new Error(`發生錯誤: ${response.status}`);
      }
    } catch (error) {
      if (import.meta.client) {
        alert(`Error: ${error.message}`);
      } else {
        console.error(`Error fetching news: ${error.message}`);
      }
    } finally {
      isLoading.value = false;
    }
  };

  return {
    isLoading,
    data,
    getData,
  };
};
