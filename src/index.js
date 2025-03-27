// Используем модули (Parcel сам разбивает код на чанки)
export const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };
  
  // Используем стрелочные функции и тернарный оператор
  const sum = (a, b) => a + b;
  
  // Пример асинхронного вызова с обработкой ошибок
  const loadData = async () => {
    const data = await fetchData("https://jsonplaceholder.typicode.com/posts");
    console.log('Привет');
  };
  
  loadData();