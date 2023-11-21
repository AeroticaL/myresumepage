import NavBar from "@/components/NavBar";
import IntroCard from "@/components/IntroCard";
import TwitterCard from "@/components/TwitterCard";
import ToggleCard from "@/components/ToggleCard";

import ArticleCard from "@/components/ArticleCard";
import DiscordCard from "@/components/DiscordCard";
import MailCard from "@/components/MailCard";
import SpotifyCard from "@/components/SpotifyCard";
import { useState } from "react";
import MapCard from "@/components/MapCard";
import OnlineCard from "@/components/OnlineCard";
import TimeCard from "@/components/TimeCard";
import LanguagesCard from "@/components/languages";
import HobbiesCard from "@/components/hobbies";

function Home() {
  const [section, setSection] = useState("all");
  return (
    <main className="bg-gray-500 dark:bg-gray-800">
    <div className="flex flex-col m-1 font-nunito">
      <NavBar setSection={setSection} />
      <div
        className="grid grid-cols-5 gap-2 md:grid-cols-3 
			md:gap-5 mt-9 container mx-auto xl:px-60"
      >
        <IntroCard section={section} />
        <MailCard section={section} />
        <LanguagesCard section={section} />
        <ArticleCard section={section} />
        <TwitterCard section={section} />
        <ToggleCard section={section} />
        <DiscordCard section={section} />
        <HobbiesCard section={section} />
        <OnlineCard section={section} />
        <MapCard section={section} />
        <TimeCard section={section} />
       
      </div>
      
     <br />
      <br />
    </div>
    </main>
  );
}

export default Home;
