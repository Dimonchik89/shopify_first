import React, { FC } from 'react';
import { Layout } from '@components/common';
import { getConfig } from '@framework/api/config';
import { getProduct } from '@framework/product';
import { Product } from '@common/types/product';

type Params = {
    slug: string;
};

interface Props {
    params: Params;
    searchParams: URLSearchParams;
}

const ProductSlug: FC<Props> = async (props) => {
    const config = getConfig();
    const { product } = await getProduct({
        config,
        variables: { slug: props.params?.slug },
    });

    return (
        <Layout>
            <div>{JSON.stringify(product, null, 2)}</div>
        </Layout>
    );
};

export default ProductSlug;
