export default function LAuth({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex justify-center items-center w-full h-screen">
            <div className="bg-green-300  w-full h-screen hidden md:flex" >content</div>
            <div className="bg-red-200  h-screen w-full flex justify-center items-center">{children}</div>
        </div>
    )
}