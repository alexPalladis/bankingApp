import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const Home = async () => {
    const loggedIn = await getLoggedInUser()

    return(
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox
                    type='greeting'
                    title='Welcome'
                    user={loggedIn?.name || 'Guest'}
                    subtext='Manage your account and transactions'
                    />

                    <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1250.75}
                    />
                </header>
            </div>
            <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{currentBalance: 123.5},{currentBalance: 500.45}]}
            />
        </section>
    )
}

export default Home;