/* eslint-disable prettier/prettier */
import { Box } from "@chakra-ui/layout";
import Sidebar from "./Sidebar";

const PlayerLayout = ({ children }) => {
  return (
    <Box width="100vw" height="100vh">
      <Box position="absolute" top="0" width="250px" left="0">
       <Sidebar />
      </Box>

      
      <Box marginLeft='250px'  bg='black'  height="calc(100vh - 100px)" marginBottom="100px"  >
        <Box  height="calc(100vh - 100px)" >
         {children}
            
        </Box>
      </Box>

      <Box position="absolute" bottom="0" left="0" >
        PLAYER
      </Box>
    </Box>
  )
}

export default PlayerLayout;
