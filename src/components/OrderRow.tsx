interface OrderProps{
    title: string;
}
export const OrderRow = (props: OrderProps) => {
const {title} = props;
    return (
        <div className="flex-1 flex justify-center border border-black bg-gray-100 text-2xl">
            <div className="h-[60px] w-5/6 mt-10 rounded-md bg-black">{title}</div>
      </div>
    )
}