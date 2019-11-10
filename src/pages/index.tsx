import React from "react"
import GlobalLayout from "../layouts/global"
import {Button} from "@chakra-ui/core";
import {IoIosAlarm } from "react-icons/io";
export default () => {
    return (
        <GlobalLayout>
            <Button leftIcon={IoIosAlarm} variantColor="primary">This is a button</Button>
        </GlobalLayout>
    )
}

