// import getAllProducts from "@/framework/shopify/product/get-all-products";
import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { Grid, Hero, Marquee } from '@components/ui';
import { getConfig } from '@framework/api/config';
import getAllProducts from '@framework/product/get-all-products';

export default async function Home() {
    const config = getConfig();
    const products = await getAllProducts({
        apiUrl: config.apiUrl,
        fetch: config.fetch,
    });

    return (
        <>
            <Layout>
                <Grid layout="A">
                    {products.slice(0, 3).map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            variant="simple"
                        />
                    ))}
                </Grid>
                <Hero
                    headLine="Cookies, ice cream an muffin"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita sit tempora fuga recusandae reprehenderit repellat inventore, dignissimos necessitatibus illum, pariatur enim iste! Libero, ipsam nihil repellendus architecto qui voluptate nesciunt"
                />
                <Marquee>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            variant="slim"
                        />
                    ))}
                </Marquee>
                <Grid layout="B">
                    {products.slice(0, 3).map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            variant="simple"
                        />
                    ))}
                </Grid>
                <Marquee variant="secondary">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            variant="slim"
                        />
                    ))}
                </Marquee>
            </Layout>
        </>
    );
}
