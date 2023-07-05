import { Box, Typography } from '@mui/material'

export const AllMessagesPage: React.FC = () => {
  return (
    <Box display='flex' height='100%'>
      <Box width='20%' borderRight='1px solid gray' p={2}>
        {/* Sidebar trái */}
        {/* Hiển thị danh sách tất cả tin nhắn */}
      </Box>
      <Box flex='1' p={2}>
        {/* Nội dung chat chi tiết của một tin nhắn */}
        {/* Thanh header */}
        <Typography variant='h5' component='h2'>
          Tên tin nhắn
        </Typography>
        {/* Các menu khác */}
      </Box>
    </Box>
  )
}
