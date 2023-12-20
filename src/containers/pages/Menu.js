import SideVar from "../../components/utils/SideVar";
import Layout from "../../hocs/layouts/layout";

export default function Menu() {
  return (
    <Layout>
      <div className="mt-20 bg-chef">
        <SideVar />
      </div>
    </Layout>
  );
}
