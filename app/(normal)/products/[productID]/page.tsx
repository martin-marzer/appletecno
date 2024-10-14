

export default function Page({params}: { params: { productID: number } } ) {
    const productID = params.productID;
    console.log(productID)
    return <h1>product page specific: {productID}</h1>
}