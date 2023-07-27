import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as _HomeRounded } from "./svgs/home-solid.svg";
import { ReactComponent as _HomeOutlined } from "./svgs/home-outlined.svg";
import { ReactComponent as _RobotIconOutlined } from "./svgs/robot-outlined.svg";
import { ReactComponent as _RobotIcon } from "./svgs/robot-solid.svg";
import { ReactComponent as _BookOpen } from "./svgs/bookopen-solid.svg";
import { ReactComponent as _BookOpenOutlined } from "./svgs/bookopen-outlined.svg";
import { ReactComponent as _DiscordIcon } from "./svgs/discord.svg";
import { ReactComponent as _AppLogo } from "./svgs/favicon.svg";
import { ReactComponent as _Archive } from "./svgs/archive-solid.svg";
import { ReactComponent as _ArchiveOutlined } from "./svgs/archive-outlined.svg";
import { ReactComponent as _Gamepad } from "./svgs/gamepad-solid.svg";
import { ReactComponent as _GamepadOutlined } from "./svgs/gamepad-outlined.svg";
import { ReactComponent as _CoinOutlined } from "./svgs/coin-outlined.svg";
import { ReactComponent as _Coin } from "./svgs/coin-solid.svg";
import { ReactComponent as _ShopOutlined } from "./svgs/shop-outlined.svg";
import { ReactComponent as _Shop } from "./svgs/shop-solid.svg";
import { ReactComponent as _MessengerIcon } from "./svgs/messenger.svg";
import { FC } from "react";
// eslint-disable-next-line
const getSvgIcon = (Icon: FC) => (props: any) =>
  (
    <SvgIcon {...props}>
      <Icon />
    </SvgIcon>
  );

export const HomeRounded = getSvgIcon(_HomeRounded);
export const HomeOutlined = getSvgIcon(_HomeOutlined);
export const RobotIconOutlined = getSvgIcon(_RobotIconOutlined);
export const RobotIcon = getSvgIcon(_RobotIcon);
export const BookOpen = getSvgIcon(_BookOpen);
export const BookOpenOutlined = getSvgIcon(_BookOpenOutlined);
export const DiscordIcon = getSvgIcon(_DiscordIcon);
export const AppLogo = getSvgIcon(_AppLogo);
export const Archive = getSvgIcon(_Archive);
export const ArchiveOutlined = getSvgIcon(_ArchiveOutlined);
export const Gamepad = getSvgIcon(_Gamepad);
export const GamepadOutlined = getSvgIcon(_GamepadOutlined);
export const CoinOutlined = getSvgIcon(_CoinOutlined);
export const Coin = getSvgIcon(_Coin);
export const ShopOutlined = getSvgIcon(_ShopOutlined);
export const Shop = getSvgIcon(_Shop);
export const MessengerIcon = getSvgIcon(_MessengerIcon);
