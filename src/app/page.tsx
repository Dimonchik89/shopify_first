// import getAllProducts from "@/framework/shopify/product/get-all-products";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid } from "@components/ui";
import { getConfig } from "@framework/api/config";
import getAllProducts from "@framework/product/get-all-products";

export default async function Home() {
  const config = getConfig();
  const products = await getAllProducts({
    apiUrl: config.apiUrl,
    fetch: config.fetch,
  });

  return (
    <Layout>
      <Grid layout="A">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </Layout>
  );
}
