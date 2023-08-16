import React, { useEffect, useState } from 'react';

type Props = {}

const Home = (props: { name: string }) => {

    return (
        <div>{props.name ? "Hi " + props.name : "You're not logged in."}</div>
    )
}

export default Home