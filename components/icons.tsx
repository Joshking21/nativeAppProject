import {
  Wallet,
  House,
  Users,
  Settings,
  PlusCircle,
  LucideIcon,
  Bell
} from "lucide-react-native"; // Import from root, not /icons
import { cssInterop } from "nativewind";

// 1. Create the interop function
function iconWithClassName(icon: LucideIcon) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true, // This maps Tailwind 'text-...' to Lucide 'color'
        size: true, // This maps Tailwind 'w-...' and 'h-...' to Lucide 'size'
      },
    } as any, // <--- Add 'as any' here to bypass the strict type check
  });
}
// 2. Wrap your icons
iconWithClassName(Wallet);
iconWithClassName(Users);
iconWithClassName(Settings);
iconWithClassName(PlusCircle);
iconWithClassName(House);
iconWithClassName(Bell);

// 3. Export them
export { Wallet, Users, Settings, PlusCircle, House, Bell };
