import { Grid } from "@mantine/core";
import { DashboardLayout } from "../../Components/Layouts/DashBoard";
import { ListadoUsuarios } from "../../Components/listados/ListadoUsuarios";

const HomePage = () => {
  return (
    <DashboardLayout title="Listado de usuarios">
      <Grid columns={12}>
        <Grid.Col span={12}>
          <h1>HOME</h1>
        </Grid.Col>
      </Grid>
    </DashboardLayout>
  );
};

export default HomePage;
