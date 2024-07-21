import { CarProps } from "@/types/index";

interface CarDetailsProps{
    isopen: boolean;
    closeModal:() => void;
    car: CarProps
}


export default function CarDetails() {
  return (
    <div>CarDetails</div>
  )
}
