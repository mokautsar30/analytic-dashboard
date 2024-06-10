
const filterSales = (sales, searchTerm, startDate, endDate) => {
    return sales.filter((sale) => {
      const matchesProduct = sale.product.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesDate =
        (!startDate || new Date(sale.date) >= new Date(startDate)) &&
        (!endDate || new Date(sale.date) <= new Date(endDate));
      return matchesProduct && matchesDate;
    });
  };
  
  export default filterSales;
  