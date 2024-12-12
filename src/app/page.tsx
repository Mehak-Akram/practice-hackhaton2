import Main from "@/components/main";
import Today from "@/components/today";
import Categories from "@/components/categories";
import Month from "@/components/month";
import Categories2 from "@/components/categories2";
import Ourproduct from "@/components/ourproduct";
import Featured from "@/components/featured";
import Icons2 from "@/components/icons2";

export default function Home() {
  return (
    <div>

      <Main/>
      <Today/>
      <Categories/>
      <Month/>
      <Categories2/>
      <Ourproduct/>
      <Featured/>
      <Icons2/>
    </div>
  );
}
