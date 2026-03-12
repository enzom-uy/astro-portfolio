import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";

interface Props {
  name: string;
  description: string;
}

export const TechStackProvider: React.FC<{ children: any }> = ({
  children,
}) => {
  return <TooltipProvider>{children}</TooltipProvider>;
};

export const TechStackItem: React.FC<Props> = ({ name, description }) => {
  return (
    <TechStackProvider>
      <Tooltip>
        <TooltipTrigger className="text-secondary hover:text-accent transition-colors">
          {name}
        </TooltipTrigger>
        <TooltipContent className="bg-card text-foreground">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TechStackProvider>
  );
};
