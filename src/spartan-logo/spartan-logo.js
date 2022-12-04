import React from 'react';
import { Wrapper } from './spartan-logo.styles';

const SpartanLogo = (props) => {
  const { color, ...rest } = props;

  const logo = (
    <>
      <circle cx="100" cy="100" r="97.5" stroke={color} strokeWidth="5" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M101.53 30.0222C108.49 30.0222 143.902 38.3179 145.891 61.424C147.505 80.1793 147.386 93.816 147.283 105.494C147.26 108.204 147.237 110.807 147.237 113.345C147.237 114.927 146.077 115.821 144.917 116.715C143.757 117.609 142.596 118.503 142.596 120.084C142.596 120.833 142.722 123.576 142.889 127.233C143.224 134.547 143.727 145.519 143.727 151.509C143.727 156.053 134.662 168.978 129.23 176.723C128.4 177.906 127.655 178.969 127.04 179.862C124.792 183.126 121.546 186.601 121.546 179.862C121.546 176.904 120.943 168.371 120.217 158.094C118.736 137.149 116.744 108.957 118.3 105.943C119.25 104.104 124.457 103.751 129.312 103.422C133.231 103.157 136.92 102.907 137.956 101.904C139.041 100.854 140.841 85.0044 136.694 84.4691C134.906 84.2383 114.754 86.18 107.793 92.9189C106.534 94.1381 108.798 100.587 110.905 106.585C111.922 109.483 112.903 112.276 113.431 114.323C114.108 116.942 103.694 124.367 101.53 124.367C101.53 87.5233 101.53 30.0222 101.53 30.0222ZM101.53 30.0222C94.5691 30.0222 57.8114 38.3645 55.8225 61.4706C54.4198 77.7667 54.9957 93.4231 55.457 105.965C55.6498 111.205 55.8225 115.902 55.8225 119.875C55.8225 121.456 56.9826 122.35 58.1428 123.244C59.3029 124.138 60.463 125.032 60.463 126.614V151.323C60.463 157.49 69.2074 169.881 74.5494 177.45C75.3604 178.599 76.0929 179.637 76.7046 180.525C78.9523 183.789 85.9855 187.264 85.9855 180.525C85.9855 178.714 86.0519 174.806 86.139 169.684C86.4839 149.396 87.1527 110.054 85.3002 106.467C84.347 104.621 78.9399 104.111 73.922 103.638C69.9038 103.259 66.1352 102.903 65.1034 101.904C64.0182 100.854 62.2182 85.0044 66.3657 84.4691C68.1532 84.2383 88.3057 86.18 95.2664 92.9189C96.564 94.1752 94.12 101.49 91.963 107.946C91.0155 110.782 90.1234 113.452 89.6281 115.37C88.9517 117.99 99.3658 124.274 101.53 124.367C101.53 87.5233 101.53 30.0222 101.53 30.0222Z"
        fill={color}
      />
      <path
        d="M23.4447 55.4337L18.3828 54.2974C18.0945 54.2327 17.7999 54.2 17.5044 54.2C15.8832 54.2 14.4215 55.176 13.8 56.6733L9.78401 66.3494C9.67649 66.6085 9.59096 66.8761 9.52833 67.1495L6.94101 78.4428C6.68113 79.5771 7.21852 80.7441 8.24938 81.284L8.45269 81.3905C9.17183 81.7672 9.62245 82.5119 9.62245 83.3237V85.0976C9.62245 86.2477 10.9655 86.8745 11.847 86.1357C12.0908 85.9314 12.3989 85.8194 12.717 85.8194H15.8096C17.1759 85.8194 18.4828 85.2602 19.4262 84.2718L20.9619 82.6631C21.3784 82.2268 21.7125 81.7187 21.9481 81.1634L22.9751 78.743C23.4267 77.6785 23.4954 76.4905 23.1695 75.381L22.406 72.7815C21.9022 71.0665 22.3524 69.213 23.5866 67.92L30.5904 60.5831C31.1737 59.9721 31.9022 59.5188 32.7081 59.2655L34.7593 58.6209C35.9939 58.2329 37.0299 57.3814 37.6496 56.2453L40.2371 51.5019C40.6373 50.7683 41.215 50.1466 41.9174 49.6938L47.6122 46.0226L57.1928 41.0045C57.7398 40.7179 58.229 40.3326 58.6356 39.8679L63.1868 34.6668C63.5562 34.2446 63.9941 33.8876 64.482 33.6108L75.8997 27.132C76.1227 27.0055 76.3356 26.862 76.5366 26.7028L96.6468 10.7743C97.2549 10.2927 97.9667 9.95912 98.7259 9.80005L101.827 9.15038C102.442 9.02148 102.998 8.69317 103.407 8.21637L104.808 6.5856C105.849 5.37419 104.988 3.5 103.391 3.5C102.991 3.5 102.602 3.62831 102.28 3.86607L94.2392 9.81224C94.0324 9.96514 93.8142 10.1019 93.5863 10.2212L76.9634 18.928C76.4808 19.1807 76.0428 19.5107 75.6667 19.9047L67.3931 28.5718C67.0446 28.9369 66.6428 29.2471 66.2014 29.4919L58.37 33.8351C58.1373 33.9642 57.9153 34.1116 57.706 34.276L48.1645 41.7726C47.7981 42.0604 47.3933 42.2956 46.9619 42.4714L39.1397 45.6581C38.5486 45.8989 38.0091 46.2506 37.5504 46.6942L31.9973 52.0639C31.6539 52.3959 31.2647 52.6771 30.8416 52.8987L26.8598 54.9843C25.8106 55.5338 24.6004 55.6931 23.4447 55.4337Z"
        fill={color}
      />
      <path
        d="M168.409 37.8367L169.908 35.0101C170.228 34.4065 170.856 34.029 171.539 34.029C172.147 34.029 172.716 34.3284 173.06 34.8294L181.778 47.5134C181.844 47.6097 181.903 47.7122 181.954 47.8176C182.887 49.7737 180.771 51.8146 178.883 50.7498C178.462 50.5123 178.131 50.144 177.938 49.7007L175.828 44.8364C175.7 44.5427 175.494 44.29 175.231 44.1066C174.084 43.3057 172.51 44.1262 172.51 45.5252V50.3839V51.5237C172.51 52.0985 172.044 52.5645 171.469 52.5645C170.895 52.5645 170.429 52.0985 170.429 51.5237V47.5649C170.429 46.56 170.126 45.5785 169.56 44.7483L168.695 43.4808C168.129 42.6505 167.827 41.6689 167.827 40.664V40.1793C167.827 39.3625 168.027 38.5582 168.409 37.8367Z"
        fill={color}
      />
      <path
        d="M178.24 52.6647H181.439C183.449 52.6647 185.263 53.8678 186.045 55.7189L194.085 74.7516C194.757 76.3407 193.59 78.1 191.865 78.1C191.352 78.1 190.852 78.2637 190.439 78.5671L188.693 79.8487C187.409 80.7906 186.651 82.2875 186.651 83.8796V92.7931C186.651 93.4539 186.782 94.1081 187.036 94.718L189.554 100.753C189.725 101.163 189.84 101.594 189.897 102.034L191.075 111.112V123.077C191.075 123.397 191.106 123.717 191.168 124.032L192.688 131.842C192.869 132.775 192.669 133.741 192.131 134.524C190.262 137.245 186.016 136.155 185.687 132.871L184.813 124.136C184.774 123.753 184.691 123.375 184.566 123.01L181.866 115.148C181.686 114.626 181.594 114.077 181.594 113.524V102.453V91.5738C181.594 91.0068 181.135 90.5471 180.568 90.5471C179.845 90.5471 179.349 89.8209 179.611 89.1478L180.985 85.6193C181.371 84.6261 181.3 83.5129 180.79 82.577L177.364 76.2917C177.235 76.0545 177.125 75.8072 177.036 75.5522L176.446 73.8701C175.744 71.8656 173.852 70.5235 171.727 70.5235H169.201C168.215 70.5235 167.251 70.2319 166.43 69.6852L164.229 68.2194C162.836 67.2923 162 65.7304 162 64.0577V63.4599C162 61.7872 162.836 60.2254 164.229 59.2983L166.407 57.8479C167.208 57.3145 167.689 56.416 167.689 55.4538V53.4617C167.689 52.1417 169.114 51.3138 170.261 51.9682C170.971 52.3735 171.868 52.2228 172.407 51.6078L172.429 51.5824C172.981 50.9525 173.9 50.7982 174.627 51.2133L176.24 52.1341C176.849 52.4818 177.539 52.6647 178.24 52.6647Z"
        fill={color}
      />
      <path
        d="M188.16 145.339L187.498 146.395C186.848 147.43 185.374 147.525 184.596 146.581C184.256 146.168 183.749 145.929 183.213 145.929H177.235C176.613 145.929 175.997 145.813 175.417 145.586L172.46 144.432C171.732 144.148 171.081 143.697 170.559 143.116L166.746 138.872C165.652 137.655 165.224 135.979 165.598 134.385L166.622 130.037C166.912 128.801 168.014 127.929 169.283 127.929H169.787C171.303 127.929 172.418 126.508 172.059 125.036L172.009 124.832C171.675 123.463 172.712 122.143 174.121 122.143C175.321 122.143 176.294 121.17 176.294 119.969V119.571C176.294 118.151 177.445 117 178.866 117H179.118C180.677 117 181.941 118.264 181.941 119.824V121.203C181.941 121.822 182.078 122.433 182.341 122.993L183.057 124.514C183.691 125.862 183.691 127.423 183.057 128.772L183.025 128.839C182.344 130.287 182.397 131.972 183.166 133.375L188.239 142.614C188.709 143.47 188.678 144.512 188.16 145.339Z"
        fill={color}
      />
      <path
        d="M39.3539 159.764L34.7984 165.236C33.1744 167.187 30 166.038 30 163.5C30 162.824 30.2521 162.173 30.707 161.673L35.7943 156.086C36.0823 155.77 36.3285 155.418 36.5269 155.039L50.5526 128.25L56.7182 116.494C57.5225 114.961 59.1111 114 60.8427 114H62.4287C64.1249 114 65.5 115.375 65.5 117.071C65.5 117.303 65.4738 117.534 65.4218 117.76L63.0739 127.967C63.0306 128.155 63.0088 128.347 63.0088 128.541C63.0088 129.954 61.8629 131.1 60.4493 131.1H58.9727C58.3713 131.1 57.7993 130.84 57.4035 130.387C56.4773 129.328 54.789 129.472 54.0556 130.673L44.0046 147.134C43.8034 147.464 43.641 147.815 43.5207 148.182L40.2624 158.122C40.0659 158.722 39.7576 159.279 39.3539 159.764Z"
        fill={color}
      />
      <path
        d="M36.5937 123.333H37.084C39.001 123.333 40.2659 121.326 39.4756 119.58C39.0461 118.631 39.2258 117.505 39.9387 116.745C41.5356 115.043 44.3913 116.173 44.3913 118.507V122.824C44.3913 123.162 44.4314 123.5 44.5108 123.829L45.8605 129.422C45.9532 129.806 46 130.2 46 130.595V134.455C46 137.42 43.4342 139.734 40.4847 139.429L39.5652 139.333L33.0402 138.35C31.5688 138.128 30.2726 137.263 29.504 135.989L28.8385 134.885C27.9992 133.494 27.8882 131.782 28.5411 130.294L30.4971 125.835C30.6424 125.504 30.7174 125.147 30.7174 124.785V124.143C30.7174 121.977 33.3856 120.949 34.8388 122.555C35.2875 123.05 35.925 123.333 36.5937 123.333Z"
        fill={color}
      />
      <path
        d="M64.773 48.1739L68.7849 51.2493C69.553 51.8381 70.4754 52.1913 71.4403 52.2661L127.114 56.5824C130.019 56.8076 132.5 54.5111 132.5 51.5974V41.7826C132.5 40.4801 131.444 39.4242 130.142 39.4242H129.795C129.083 39.4242 128.436 39.0088 128.141 38.3612C127.591 37.1571 128.471 35.7879 129.795 35.7879H130.335C131.531 35.7879 132.5 34.8184 132.5 33.6225V31.5582C132.5 30.39 132.017 29.2737 131.165 28.4742L128.906 26.3542C128.72 26.1789 128.52 26.0183 128.309 25.8736L126.661 24.7458C125.144 23.7077 123.18 23.5855 121.546 24.4274L117.665 26.4274C115.916 27.3291 113.8 27.1203 112.26 25.894L109.115 23.3894C108.841 23.1708 108.59 22.924 108.367 22.6529L105.589 19.2721C104.436 17.8697 102.614 17.2021 100.828 17.5281L97.8618 18.0695C95.4859 18.5031 93.7595 20.573 93.7595 22.9882V23.6811C93.7595 25.2038 93.0656 26.6436 91.8745 27.5922L85.0983 32.9889C83.6798 34.1187 81.584 33.1086 81.584 31.2951C81.584 30.3596 80.9832 29.5299 80.0944 29.2379L76.8099 28.1589C76.3063 27.9934 75.7795 27.9091 75.2493 27.9091H74.7797C72.1189 27.9091 69.9618 30.0661 69.9618 32.7269C69.9618 34.595 68.882 36.2947 67.1909 37.0883L63.8754 38.6444C62.8026 39.1479 61.9436 40.016 61.4514 41.094L60.0868 44.0826C60.0296 44.2079 60 44.344 60 44.4818V44.9945C60 45.8208 61.0859 46.1253 61.5156 45.4196C61.834 44.8965 62.5935 44.8965 62.9119 45.4196L64.2011 47.5372C64.3507 47.783 64.5446 47.9989 64.773 48.1739Z"
        fill={color}
      />
    </>
  );

  return <Wrapper {...rest}>{logo}</Wrapper>;
};

export default SpartanLogo;
