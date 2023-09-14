
import { LibroContext } from "@/app/LibroContext";
import { useContext } from "react";

export const useLibro = () => {
    return useContext( LibroContext )
}