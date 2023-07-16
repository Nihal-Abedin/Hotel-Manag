import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export const useSettings = () => {
  // const queryClient = useQueryClient();

  const { data: settings, isLoading: isGeting } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { settings, isGeting };
};
