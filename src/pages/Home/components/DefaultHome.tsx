import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { DiscordIcon, MessengerIcon } from "@assets/icons";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardHeader from "@mui/material/CardHeader";
import { discordColor, facebookColor } from "@assets/styles/colors";
import favIconRawSvg from "@assets/icons/svgs/favicon.svg";

const DefaultHome = () => {
  return (
    <>
      <Container>
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={450}
          sx={{ margin: "1.5em 0 .8em" }}
        >
          TrietRobotVjp
        </Typography>
        <Typography textAlign="center" variant="h6">
          Ứng dụng giải trí tiện lợi, đa nền tảng mạng xã hội.
        </Typography>
        <br />
        <Typography textAlign="center" variant="body1">
          Nhanh, dễ sử dụng, tài liệu dễ hiểu, hỗ trợ chi tiết, và quan trọng,
          vô cùng giải trí.
        </Typography>
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          my: 8,
          "& > *": {
            mx: {
              xs: 2,
              lg: 8,
            },
            my: {
              xs: 3,
              md: 0,
            },
            width: { xs: "initial", md: "100%" },
          },
          "& *": {
            textAlign: "center",
          },
          "& > * > *": {
            py: 3,
          },
          "& .MuiAvatar-root": {
            width: 50,
            height: 50,
            "& > *": {
              fontSize: 30,
            },
          },
        }}
      >
        <Card>
          <CardActionArea>
            <Avatar
              sx={{
                backgroundColor: discordColor,
                margin: "1em auto 0",
                color: "white",
              }}
            >
              <DiscordIcon />
            </Avatar>
            <CardHeader title="TrietRobotVjp Discord"></CardHeader>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <Avatar
              src={favIconRawSvg}
              sx={{ backgroundColor: "transparent", margin: "1em auto 0" }}
            />

            <CardHeader title="TrietRobotVjp Client"></CardHeader>
          </CardActionArea>
        </Card>
        <Card>
          <CardActionArea>
            <Avatar
              sx={{
                backgroundColor: facebookColor,
                margin: "1em auto 0",
                color: "white",
              }}
            >
              <MessengerIcon />
            </Avatar>
            <CardHeader title="TrietRobotVjp Messenger"></CardHeader>
          </CardActionArea>
        </Card>
      </Box>
    </>
  );
};

export default DefaultHome;
