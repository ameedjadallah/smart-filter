
// components
import Layout from "../../components/Layout";
import Filters from "../../components/Filters"
import AppliedFilters from "../../components/AppliedFilters";
function Products() {
  return (
     <Layout>
          <Filters />
          <AppliedFilters />
     </Layout>
  );
}

export default Products;
