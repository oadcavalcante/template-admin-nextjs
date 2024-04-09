import { useState, useEffect } from "react";
import Link from "next/link";

interface MenuItemProps {
  url?: string;
  texto: string;
  icone: any;
  className?: string;
  onClick?: (evento: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  function renderizarLink() {
    return (
      <div className={`flex flex-col justify-center items-center h-20 w-20 dark:text-gray-200 ${props.className}`}>
        {props.icone}
        <span className={`text-xs font-light `}>{props.texto}</span>
      </div>
    );
  }

  return (
    <li onClick={props.onClick} className={`hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}>
      {isClient ? (
        props.url ? (
          <Link href={props.url}>{renderizarLink()}</Link>
        ) : (
          renderizarLink()
        )
      ) : props.url ? (
        <a href={props.url}>{renderizarLink()}</a>
      ) : (
        renderizarLink()
      )}
    </li>
  );
}
