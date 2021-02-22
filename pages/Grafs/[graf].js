import Link from "next/link";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { useRouter } from 'next/router';

export default function Graf() {
  const router = useRouter()
  const { graf } = router.query

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link href="/home">Home</Link>
        </Breadcrumb.Item>

        <Breadcrumb.Item active>Graf {graf}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
