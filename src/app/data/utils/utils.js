  // Função para converter a data para o formato "DD-MM-YYYY"
  export function convertDate(date) {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }

  // Converte Receita dos filmes
  export function formatRevenue(revenue) {
    return Number(revenue).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
