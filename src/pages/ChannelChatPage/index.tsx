import { Box, Typography } from '@mui/material'

export const ChannelChatPage: React.FC = () => {
  return (
    <Box display='flex' height='100%'>
      <Box width='20%' borderRight='1px solid gray' p={2}>
        {/* Sidebar trái */}
        {/* Hiển thị danh sách kênh */}
      </Box>
      <Box flex='1' p={2}>
        {/* Nội dung chat chi tiết của một kênh */}
        {/* Thanh header */}
        <Typography variant='h5' component='h2'>
          Tên kênh
        </Typography>
        {/* Các menu khác */}
      </Box>
    </Box>
  )
}
