import { ProductForm } from "../components/formularioproductos";
import { Layout } from "../components/Layout";

function NewPage() {
  return (
    <Layout>
      <div className="grid place-items-center h-5/6">
        <ProductForm />
      </div>
    </Layout>
  );
}
export default NewPage;
