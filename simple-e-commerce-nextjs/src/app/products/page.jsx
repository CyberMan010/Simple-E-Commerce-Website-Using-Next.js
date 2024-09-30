import { useRouter } from "next/router"

export default function Products() {
    const router = useRouter()

    return (
   <p>Post: {router.query.slug}</p>
    )
    }