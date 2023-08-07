  // Função para converter a data para o formato "DD-MM-YYYY"
  export function convertDate(date) {
    if (!date) return "";
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  }
