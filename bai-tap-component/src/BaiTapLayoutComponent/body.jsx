import React from 'react'
import Banner from './banner'
import Item from "./item";

export default function Body() {
    return (
        <div>
            <Banner />
            <div class="pt-4">
                <div class="container px-lg-5">
                    <div class="row gx-lg-5">
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
            </div>
        </div>
    )
}
