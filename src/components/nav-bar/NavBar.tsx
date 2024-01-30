import { Box,Stack } from "@mui/material";
import SearchBar from "../search-bar/SearchBar";
import Image from "next/image";
import { Person,ShoppingCart,Favorite } from "@mui/icons-material";
export default function NavBar(){
    return (
        <main style={{width:'100%'}}>
            <Stack direction={'row'} sx={{backgroundColor:'#FFFFFF',width:'100%',position:'fixed',height:86,alignItems:'center',justifyContent:'space-between',paddingLeft:'2%',paddingRight:'2%'}} spacing={5}>
                <Image src={'/logo.jpg'} width={94}  height={44} alt="Logo" /> 
                <SearchBar></SearchBar>
                <Stack direction={'row'} sx={{alignItems:'center',justifyContent:'center'}} spacing={4}>
                    <Person />
                    <ShoppingCart />
                    <Favorite />
                </Stack>
            </Stack>
        </main>
    )
} 