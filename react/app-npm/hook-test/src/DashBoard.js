/**
 * Mui에서 라이브러리에서 제공하는 툴패드 활용 대시보드 구성
 *  - 기본적인 레이아웃 제공
 *  - 라우팅 제공
 *  - 머터리얼 디자인 제공
 *  - 버전이 올라갈때마다 기능이 수정될수 있음!!(버전 주의)
 * 
 * 레이아웃 적용시
 *  - 기존 샘플 적용
 *      - 필요한 기능 중심 세팅
 *      - 차후 구조가 익숙해지면 커스텀진행
 */
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import {
  Account,
  AccountPreview,
  AccountPopoverFooter,
  SignOutButton,
} from '@toolpad/core/Account';

// 아이콘 가져오기
import BarChartIcon from '@mui/icons-material/BarChart';

// 서브페이지 가져오기
import App6_mui from './App6_mui';
import App7_mui from './App7_mui';

// (*)사이드바 메뉴, 진입로(엔트리포인트) ---------------
// 게시판, 환율계산기 연계하도록 진입로 세팅
const NAVIGATION = [
  {
    kind: 'header',            // 메뉴별 카테고리
    title: '메인 메뉴',         // 메뉴명
  },
  {
    segment: 'dashboard',       // URL의미, 라우팅을위한 주소값
    title: 'Dashboard',         // 메뉴명
    icon: <DashboardIcon />,    // 아이콘
  },
  {
    segment: 'orders',
    title: 'Orders',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider'             // 구분선
  },
  {
    segment: 'reports',
    title: '분석 보고서',
    icon: <BarChartIcon/>,
    children: [
        {
            segment: 'sales',       // URL => /reports/sales
            title: '판매통계',
        },
        {
            segment: 'traffic',
            title: '트레픽-로그분석',
        }
    ]
  },
  {
    kind: 'divider'             // 구분선
  },
  {
    kind: 'header',            // 메뉴별 카테고리
    title: '유틸리티',         // 메뉴명
  },
  {
    segment: 'board',
    title: '간단 게시판',
    icon: <ShoppingCartIcon />,
  },
  {
    segment: 'calculator',
    title: '환율 계산기',
    icon: <ShoppingCartIcon />,
  },
];
// -------------------------------------------------

// 상단바(navi) -------------------------------------
const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});
// --------------------------------------------------

// (*)라우팅, 페이지등록 ---------------------------------
function DemoPageContent({ pathname }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>현재페이지 주소 {pathname}</Typography>
      {/* URL별로 해당 페이지 표현, 조건부 랜더링 */}
      { pathname === '/board' && <App6_mui 
            url="https://fakestoreapi.com/products" 
            pid="1"/> }
      { pathname === '/calculator' && <App7_mui/> }
      {/* 예비 주소, 해당 페이지가 완성되면 <></> => <커스텀컴포넌트 /> 대체 */}
      { pathname === '/reports/sales' && <></> }

    </Box>
  );
}

DemoPageContent.propTypes = {
  pathname: PropTypes.string.isRequired,
};
// --------------------------------------------------

// 세션, 로그인 인증처리등등(미검토) -------------------
function AccountSidebarPreview(props) {
  const { handleClick, open, mini } = props;
  return (
    <Stack direction="column" p={0} overflow="hidden">
      <Divider />
      <AccountPreview
        variant={mini ? 'condensed' : 'expanded'}
        handleClick={handleClick}
        open={open}
      />
    </Stack>
  );
}

AccountSidebarPreview.propTypes = {
  /**
   * The handler used when the preview is expanded
   */
  handleClick: PropTypes.func,
  mini: PropTypes.bool.isRequired,
  /**
   * The state of the Account popover
   * @default false
   */
  open: PropTypes.bool,
};

const accounts = [
  {
    id: 1,
    name: 'Bharat Kashyap',
    email: 'bharatkashyap@outlook.com',
    image: 'https://avatars.githubusercontent.com/u/19550456',
    projects: [
      {
        id: 3,
        title: 'Project X',
      },
    ],
  },
  {
    id: 2,
    name: 'Bharat MUI',
    email: 'bharat@mui.com',
    color: '#8B4513', // Brown color
    projects: [{ id: 4, title: 'Project A' }],
  },
];

function SidebarFooterAccountPopover() {
  return (
    <Stack direction="column">
      <Typography variant="body2" mx={2} mt={1}>
        Accounts
      </Typography>
      <MenuList>
        {accounts.map((account) => (
          <MenuItem
            key={account.id}
            component="button"
            sx={{
              justifyContent: 'flex-start',
              width: '100%',
              columnGap: 2,
            }}
          >
            <ListItemIcon>
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  fontSize: '0.95rem',
                  bgcolor: account.color,
                }}
                src={account.image ?? ''}
                alt={account.name ?? ''}
              >
                {account.name[0]}
              </Avatar>
            </ListItemIcon>
            <ListItemText
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '100%',
              }}
              primary={account.name}
              secondary={account.email}
              primaryTypographyProps={{ variant: 'body2' }}
              secondaryTypographyProps={{ variant: 'caption' }}
            />
          </MenuItem>
        ))}
      </MenuList>
      <Divider />
      <AccountPopoverFooter>
        <SignOutButton />
      </AccountPopoverFooter>
    </Stack>
  );
}

const createPreviewComponent = (mini) => {
  function PreviewComponent(props) {
    return <AccountSidebarPreview {...props} mini={mini} />;
  }
  return PreviewComponent;
};

function SidebarFooterAccount({ mini }) {
  const PreviewComponent = React.useMemo(() => createPreviewComponent(mini), [mini]);
  return (
    <Account
      slots={{
        preview: PreviewComponent,
        popoverContent: SidebarFooterAccountPopover,
      }}
      slotProps={{
        popover: {
          transformOrigin: { horizontal: 'left', vertical: 'bottom' },
          anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
          disableAutoFocus: true,
          slotProps: {
            paper: {
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: (theme) =>
                  `drop-shadow(0px 2px 8px ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.32)'})`,
                mt: 1,
                '&::before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  bottom: 10,
                  left: 0,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translate(-50%, -50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            },
          },
        },
      }}
    />
  );
}

SidebarFooterAccount.propTypes = {
  mini: PropTypes.bool.isRequired,
};

const demoSession = {
  user: {
    name: 'Bharat Kashyap',
    email: 'bharatkashyap@outlook.com',
    image: 'https://avatars.githubusercontent.com/u/19550456',
  },
};
// ---------------------------------------------------

// 대표 컴포넌트, 전체 구성 ----------------------------
function DashboardLayoutAccountSidebar(props) {
  const { window } = props;

  // 최초 페이지 주소를 설정 => 상태변수
  const [pathname, setPathname] = React.useState('/dashboard');

  // 라우터 구성 : pathname이 변경되면 -> 새로운 페이지로 구성하겠금 조정
  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  // 세션 -> 로그인 하면 생성되는 정보 (데모수준)
  const [session, setSession] = React.useState(demoSession); // 상태변수
  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession(demoSession);
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  /*
    mui 기반의 대시보드는 아래 구조를 따른다!!
        <AppProvider>
            <DashboardLayout>
                <커스텀 컴포넌트(컨텐츠)/>
            </DashboardLayout>
        </AppProvider> 
  */
  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      authentication={authentication}
      session={session}
    >
      <DashboardLayout
        slots={{ toolbarAccount: () => null, sidebarFooter: SidebarFooterAccount }}
      >
        {/* 메뉴별 상세 페이지 컴포넌트!!, pathname(요청주소)이 변경되면 새로고침발생 */}
        <DemoPageContent pathname={pathname} />
      </DashboardLayout>
    </AppProvider>
  );
}

DashboardLayoutAccountSidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutAccountSidebar;
// ----------------------------------------------------
