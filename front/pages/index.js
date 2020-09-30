import Link from 'next/link'

const Index = () => (
    <div>
        <p>Fablo</p>
        <Link href="/Write">
            <a>Write data</a>
        </Link>
        <br />
        <Link href="/Find">
            <a>Find data</a>
        </Link>
        <br />
        <Link href="/View">
            <a>View member</a>
        </Link>
        <br />
    </div>
);

export default Index;