import { Box } from "@mantine/core";
import { FC } from "react";
import {
  createStyles,
  Image,
  Group,
  List,
  ThemeIcon,
  Overlay,
  Container,
  Title,
  Button,
  Text,
} from "@mantine/core";
import { Check } from "tabler-icons-react";
import { useState } from "react";
import { PreguntasFrecuentes } from "../reportes/preguntasFrecuentes/preguntasFrecuentesAdmin";
import { PreguntasFrecuentesMozo } from "../reportes/preguntasFrecuentes/preguntasFrecuentesMozo";
import { IUsuario } from "../../interfaces/usuario";
import { useEffect } from "react";
import { PreguntasFrecuentesCajero } from "../reportes/preguntasFrecuentes/preguntasFrecuentesCajero";
interface Props {
  title: string;
}

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));
export const Presentation: FC<Props> = ({ title }) => {
  const [usuario, setUsuario] = useState<IUsuario>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUsuario(JSON.parse(localStorage.getItem("usuario") || ""));
    }
  }, []);
  const { classes } = useStyles();
  const [open, setOpen] = useState(false);
  const [openMozo, setOpenMozo] = useState(false);
  const [openCajero, setOpenCajero] = useState(false);

  return (
    <div>
      <PreguntasFrecuentes open={open} setOpen={setOpen} />
      <PreguntasFrecuentesMozo open={openMozo} setOpen={setOpenMozo} />
      <PreguntasFrecuentesCajero open={openCajero} setOpen={setOpenCajero} />

      <Container>
        <div className={classes.inner}>
          <div className={classes.content} color="#f6dcac">
            {/* <Title className={classes.title}> */}
            {/* A <span className={classes.highlight}>modern</span> React <br />{" "}
              components library */}
            {/* </Title> */}
            <Text color="dimmed" mt="md">
              Ya formas parte de <b>Easy Peasy! </b>
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <Check size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Registrar tus pedidos</b> – Vas a poder tomar los pedidos de
                los clientes de forma rápida y sencilla!
              </List.Item>
              <List.Item>
                <b>Control de la caja</b> – Te facilitamos el cierre de caja,
                vas a poder visualizar las ganancias del día y la forma en la
                que fueron ingresadas.
              </List.Item>
              <List.Item>
                <b>Más estadísticas!</b> – Contamos con reportes semanales,
                mensuales y diarios para acompañarte en la toma de decisiones.
              </List.Item>
            </List>

            <Group mt={30}>
              <Button
                radius="xl"
                size="md"
                color="red"
                className={classes.control}
                onClick={
                  usuario && usuario.rol == "ADMIN"
                    ? () => setOpen(true)
                    : usuario && usuario.rol == "MOZO"
                    ? () => setOpenMozo(true)
                    : () => setOpenCajero(true)
                }
              >
                Preguntas frecuentes
              </Button>

              {/* <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Source code
              </Button> */}
            </Group>
          </div>
          <Image
            src={
              // "https://cdn.domestika.org/c_limit,dpr_auto,f_auto,q_auto,w_820/v1539725401/content-items/002/562/024/C-original.jpg?1539725401"
              "https://cdn.pixabay.com/photo/2020/10/07/17/12/coffee-5635765_960_720.jpg"
            }
            className={classes.image}
            radius={150}
          />
        </div>
      </Container>
    </div>
  );
};
