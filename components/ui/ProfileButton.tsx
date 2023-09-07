import { DropdownMenu,DropdownMenuContent,DropdownMenuItem ,
DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,  } from "./dropdown-menu";
import { Avatar , AvatarFallback, AvatarImage } from "./avatar";

const ProfileButton = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarImage src="/img/puff.png"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account

                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Billing
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">Subscription
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileButton;