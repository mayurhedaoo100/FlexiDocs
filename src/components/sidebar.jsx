import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  PencilIcon as PencilOutline,
  DocumentDuplicateIcon as DocumentDuplicateOutline,
  FolderIcon as FolderOutline,
  Cog6ToothIcon as CogOutline,
  HomeIcon as HomeOutline,
  QuestionMarkCircleIcon as SupportOutline,
} from "@heroicons/react/24/outline";

import {
  PencilIcon as PencilSolid,
  DocumentDuplicateIcon as DocumentDuplicateSolid,
  FolderIcon as FolderSolid,
  Cog6ToothIcon as CogSolid,
  HomeIcon as HomeSolid,
  QuestionMarkCircleIcon as SupportSolid,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    {
      iconOutline: HomeOutline,
      iconSolid: HomeSolid,
      label: "Home",
      path: "/Dashboard",
    },
    {
      iconOutline: PencilOutline,
      iconSolid: PencilSolid,
      label: "Create Document",
      path: "/GenerateDoc",
    },
    {
      iconOutline: FolderOutline,
      iconSolid: FolderSolid,
      label: "My Library",
      path: "/Library",
    },
    {
      iconOutline: DocumentDuplicateOutline,
      iconSolid: DocumentDuplicateSolid,
      label: "My Templates",
      path: "/Templates",
    },
    {
      iconOutline: CogOutline,
      iconSolid: CogSolid,
      label: "Company Details",
      path: "/CompanyDetails",
    },
    {
      iconOutline: SupportOutline,
      iconSolid: SupportSolid,
      label: "Help Support",
      path: "/Support",
    },
  ];

  return (
    <div className="lg:w-1/5 h-full pt-20 px-2 sm:px-4 md:px-6">
      <div className="space-y-4">
        {menuItems.map((item, index) => {
          const isActive =
            location.pathname.toLowerCase() === item.path.toLowerCase();
          const Icon = isActive ? item.iconSolid : item.iconOutline;

          return (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className={`flex items-center text-lg cursor-pointer sm:p-4 p-3 rounded-lg shadow hover:shadow-lg transition-shadow ${
                isActive ? "bg-indigo-500 text-white" : "bg-white"
              }`}
              aria-label={item.label}
            >
              <Icon
                className={`h-5 w-5 sm:h-6 sm:w-6 sm:mr-3 ${
                  isActive ? "text-white" : "text-indigo-500"
                }`}
                aria-hidden="true"
              />
              <p className="hidden sm:block">{item.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
